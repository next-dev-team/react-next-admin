# Locale

### Usage of locales or i18n with i18nNext

### Step 1: add locale key to language file

- `Add locale key` to all language file inside `src/locales/resources/xx.json`

- Translate for english

```json
// resources/en.json
{
  "welcome": "Welcome to Nextjs Next Boilerplate",
  "settings": {
    "currentLanguage": "Current Language : {{locale}}"
  }
}
```

- Translate for khmer

```json
// resources/km.json

{
  "welcome": "សូមស្វាគមន៍មកកាន់ Nextjs Next Boilerplate",
  "settings": {
    "currentLanguage": "ភាសាបច្ចុប្បន្ន : {{locale}}"
  }
}
```

### Step 2: Get Typescript update

- For current issue with typescript not update new key that we have added so we need to reload IDE to get new typescript update.

- For VS-CODE IDE
  - Mac User

```bash
command key + p then input > then input reload then click Reload Window
```

### Step 3: Usage

```tsx
export const HomePage = () => {
// get t func from store if those page already call seSettingsStore
const { t } = useSettingsStore();

//if not yet call seSettingsStore we also can call useTranslation from i18n it self
const { t } = useTranslation();

  return <>
// with dynamic text translate
   <h1> {t('settings.currentLanguage', { locale: 'khmer' })} <h1/>

// with normal translate
   <h1> {t('welcome')} <h1/>
  </>;
};
```
