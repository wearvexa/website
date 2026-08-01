import { useController, useFormContext } from "react-hook-form";
import { FieldWrapper } from "@/components/ui/fields/_base/FieldWrapper.tsx";
import { Calendar } from "react-multi-date-picker";
import TimePickerPkg from "react-multi-date-picker/plugins/time_picker";
import Modal from "@/components/ui/Modal.tsx";
import { useId } from "react";
import { useModal } from "@/hooks/useModal.ts";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Button } from "@/components/ui/Button.tsx";
import { XIcon } from "lucide-react";

interface DateFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  icon?: string;
  placeholder?: string;
  className?: string;
  showTime?: boolean;
}

export const DateField = ({
  name,
  label,
  required,
  icon,
  placeholder,
  showTime = false,
}: DateFieldProps) => {
  const id = useId();

  const { control } = useFormContext();
  const { openModal, closeModal } = useModal();

  const { field, fieldState } = useController({
    name,
    control,
  });

  let TimePicker;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (TimePickerPkg.default) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    TimePicker = TimePickerPkg.default;
  } else {
    TimePicker = TimePickerPkg;
  }

  return (
    <FieldWrapper
      name={name}
      label={label}
      required={required}
      error={fieldState.error?.message}
      icon={icon}
    >
      {field?.value && (
        <button
          className={"absolute left-2 cursor-pointer top-1/2 -translate-y-1/2"}
          onClick={() => field.onChange(null)}
        >
          <XIcon size={20} />
        </button>
      )}
      <button
        type="button"
        onClick={() => openModal(id)}
        className={`ava-button bg-theme-gray-150 flex items-center gap-2 hover:bg-theme-hover-gray-150 dark:bg-theme-dark-gray-150 dark:hover:bg-theme-dark-hover-gray-150 text-slate-700 dark:text-gray-100 text-[14px] w-full ${field?.value && "justify-around"}`}
      >
        {!field?.value && (
          <p className={"flex items-center h-full gap-2"}>
            <i className={"harmony-icon harmony-icon-clock-1"}></i>
            {placeholder ?? "انتخاب زمان"}
          </p>
        )}
        {field?.value && (
          <div className={"flex items-center gap-2 h-full"}>
            <p>{new Date(field?.value).toLocaleDateString("fa-IR")}</p>
          </div>
        )}
      </button>
      <Modal
        id={id}
        info={{
          title: "زمان مورد نظر را انتخاب کنید",
        }}
        className={{
          main: "max-w-105!",
          content: "flex justify-center items-center flex-col",
        }}
      >
        <div
          className={`date_field_modal ${showTime ? "min-h-100" : "min-h-77"} mb-0 w-full`}
        >
          <Calendar
            onChange={(e) => field.onChange(e ? e.toDate() : null)}
            calendar={persian}
            locale={persian_fa}
            plugins={showTime ? [<TimePicker position={"bottom"} />] : []}
          />
        </div>
        <Button variant={"primary"} onClick={() => closeModal(id)}>
          انتخاب زمان
        </Button>
      </Modal>
    </FieldWrapper>
  );
};
