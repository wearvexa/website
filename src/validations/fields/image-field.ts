import { z } from "zod";

type ImageFileFieldOptions = {
  label: string;
  maxSizeInMB?: number;
};

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];

const normalizeToFile = (value: unknown): File | undefined => {
  if (typeof File === "undefined") return undefined;
  if (value instanceof File) return value;

  if (typeof FileList !== "undefined" && value instanceof FileList) {
    return value.item(0) ?? undefined;
  }

  if (Array.isArray(value) && value[0] instanceof File) return value[0];

  return undefined;
};

const imageFileField = ({ label, maxSizeInMB = 2 }: ImageFileFieldOptions) => {
  const fileSchema = z
    .custom<File>((value) => value instanceof File, {
      message: `لطفا ${label} را انتخاب کنید.`,
    })
    .refine((file) => file.size > 0, {
      message: `فایل ${label} نامعتبر است.`,
    })
    .refine((file) => file.size <= maxSizeInMB * 1024 * 1024, {
      message: `${label} باید حداکثر ${maxSizeInMB} مگابایت باشد.`,
    })
    .refine(
      (file) => {
        const fileName = file.name.toLowerCase();

        return (
          allowedMimeTypes.includes(file.type) ||
          allowedExtensions.some((ext) => fileName.endsWith(ext))
        );
      },
      {
        message: `${label} باید در یکی از فرمت‌های jpg، jpeg، png یا webp باشد.`,
      },
    );

  return z.preprocess(normalizeToFile, fileSchema);
};

const optionalImageFileField = (options: ImageFileFieldOptions) =>
  z.preprocess(normalizeToFile, z.optional(imageFileField(options)));

export { imageFileField, optionalImageFileField };
