export interface SettingItem {
  id: string;
  key: string;
  value: any;
  type: "integer" | "string" | "boolean" | "array" | "json";
  group: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface SettingState {
  settings: SettingItem[];
  setSettings: (settings: SettingItem[]) => void;
  getSetting: <T = any>(key: string, defaultValue?: T) => T;
}
