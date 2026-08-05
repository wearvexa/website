type FormDataValue =
  | string
  | number
  | boolean
  | Date
  | File
  | Blob
  | FileList
  | FormDataObject
  | FormDataValue[];

interface FormDataObject {
  [key: string]: FormDataValue | null | undefined;
}

const isFileList = (value: unknown): value is FileList => {
  return typeof FileList !== "undefined" && value instanceof FileList;
};

const isFileOrBlob = (value: unknown): value is File | Blob => {
  return (
    (typeof File !== "undefined" && value instanceof File) ||
    (typeof Blob !== "undefined" && value instanceof Blob)
  );
};

const objectToFormData = (
  obj: FormDataObject,
  form: FormData = new FormData(),
  namespace = "",
): FormData => {
  Object.entries(obj).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    const formKey = namespace ? `${namespace}[${key}]` : key;

    if (value instanceof Date) {
      form.append(formKey, value.toISOString());
      return;
    }

    if (isFileList(value)) {
      Array.from(value).forEach((file) => form.append(formKey, file));
      return;
    }

    if (isFileOrBlob(value)) {
      form.append(formKey, value);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((v, i) => {
        if (v === undefined || v === null) return;

        if (isFileOrBlob(v) || isFileList(v)) {
          objectToFormData({ [i]: v }, form, formKey);
        } else if (v instanceof Date) {
          form.append(`${formKey}[${i}]`, v.toISOString());
        } else if (typeof v === "object") {
          objectToFormData(v as FormDataObject, form, `${formKey}[${i}]`);
        } else {
          form.append(`${formKey}[${i}]`, String(v));
        }
      });

      return;
    }

    if (typeof value === "object") {
      objectToFormData(value as FormDataObject, form, formKey);
      return;
    }

    form.append(formKey, String(value));
  });

  return form;
};

export default objectToFormData;
