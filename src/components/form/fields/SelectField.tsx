import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import type { UseQueryResult } from "@tanstack/react-query";
import { FieldWrapper } from "./_base/FieldWrapper.tsx";

export interface SelectOption {
  key: string;
  value: string;
}

interface RawSelectOption {
  label: string;
  value: string;
}

type OrvalQueryHook = () => UseQueryResult<unknown, unknown>;

interface SelectFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  icon?: string;
  placeholder?: string;
  className?: string;
  isClearable?: boolean;
  isDisabled?: boolean;
  options?: SelectOption[];
  query?: OrvalQueryHook;
  getQueryItems?: (data: unknown) => RawSelectOption[];
  isMulti?: boolean;
  isCreatable?: boolean;
  onChange?: (value: string | string[] | null) => void;
}

const defaultGetQueryItems = (data: unknown): RawSelectOption[] => {
  const datas = (data as { data?: unknown[] })?.data;

  if (!Array.isArray(datas)) return [];

  return datas
    .map((item) => {
      const { key, value } = item as Record<string, unknown>;

      if (key == null || value == null || !value || !key) return null;
      return { value: key, label: value };
    })
    .filter((x): x is RawSelectOption => x !== null);
};

export const SelectField = ({
  name,
  label,
  required,
  icon,
  placeholder = "انتخاب کنید...",
  className,
  isClearable = true,
  isDisabled,
  options,
  query,
  getQueryItems = defaultGetQueryItems,
  isMulti = false,
  isCreatable = false,
  onChange,
}: SelectFieldProps) => {
  const instanceId = useId();
  const { control } = useFormContext();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const queryResult = query?.("1", {
    request: {
      skipSuccessToast: true,
    },
  });

  const isLoadingFromQuery =
    !options && Boolean(query) && queryResult?.isLoading;

  const data = queryResult?.data;

  const resolvedOptions = useMemo(() => {
    if (options) {
      return options.map((o) => ({
        value: o.key,
        label: o.value,
      }));
    }

    if (data) {
      return getQueryItems(data);
    }

    return [];
  }, [options, data, getQueryItems]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const selectedValue = isMulti
          ? (Array.isArray(field.value) ? field.value : []).map(
              (v: string) =>
                resolvedOptions.find((o) => o.value === v) ?? {
                  value: v,
                  label: v,
                },
            )
          : (resolvedOptions.find((o) => o.value === field.value) ?? null);

        const handleChange = (
          next: RawSelectOption | RawSelectOption[] | null,
        ) => {
          if (isMulti) {
            const values = Array.isArray(next) ? next.map((o) => o.value) : [];
            field.onChange(values);
            onChange?.(values);
          } else {
            const value = next && !Array.isArray(next) ? next.value : null;
            field.onChange(value);
            onChange?.(value);
          }
        };

        const SelectComponent = isCreatable ? CreatableSelect : Select;

        return (
          <FieldWrapper
            name={name}
            label={label}
            required={required}
            error={fieldState.error?.message}
            icon={icon}
          >
            <SelectComponent
              instanceId={instanceId}
              inputId={name}
              unstyled={false}
              isClearable={isClearable}
              isDisabled={isDisabled}
              isMulti={isMulti}
              isLoading={isLoadingFromQuery}
              placeholder={placeholder}
              classNamePrefix={"ava_select"}
              className={className}
              options={resolvedOptions}
              value={selectedValue}
              onChange={handleChange as never}
              onBlur={field.onBlur}
              noOptionsMessage={() => "موردی یافت نشد"}
              loadingMessage={() => "در حال بارگذاری..."}
              formatCreateLabel={(input: string) => `ایجاد «${input}»`}
              menuPosition={"fixed"}
            />
          </FieldWrapper>
        );
      }}
    />
  );
};
