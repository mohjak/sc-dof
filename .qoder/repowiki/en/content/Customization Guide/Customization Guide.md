# Customization Guide

<cite>
**Referenced Files in This Document**   
- [tailwind.config.ts](file://tailwind.config.ts)
- [eventData.ts](file://src/data/eventData.ts)
- [LanguageContext.tsx](file://src/contexts/LanguageContext.tsx)
- [index.css](file://src/index.css)
- [App.tsx](file://src/App.tsx)
</cite>

## Table of Contents
1. [Theme Customization](#theme-customization)
2. [Language Extension](#language-extension)
3. [Event Content Updates](#event-content-updates)
4. [RTL Compatibility and Best Practices](#rtl-compatibility-and-best-practices)

## Theme Customization

The sc-dof platform uses Tailwind CSS for styling, with theme configuration centralized in `tailwind.config.ts`. The theme extends default Tailwind values with custom colors, fonts, and breakpoints that reflect Syrian cultural identity. The platform's visual design incorporates the Syrian flag colors (red, green, black) and gold accents, with special attention to Arabic typography through the Bahij Koufiya font.

To customize the theme, modify the `extend` property in the Tailwind configuration. The current configuration includes custom color definitions for `syrian` (red, green, black), `gold`, and `cream`, along with font family definitions for `koufiya` (used for Arabic) and `roboto` (used for English and Turkish). The theme also defines custom border radii and animations for accordions.

When adding new colors, follow the existing pattern of using CSS variables defined in `src/index.css`. For example, to add a new "sky" color, first define the CSS variable in `index.css` and then reference it in `tailwind.config.ts` using the `hsl(var(--variable-name))` syntax. This approach ensures consistency between light and dark modes, as the CSS variables are defined for both themes.

For font customization, add new font families to the `fontFamily` object in the Tailwind configuration. Ensure that any new Arabic fonts support proper text rendering and are loaded in `src/index.css` using `@font-face` rules. The platform currently uses font swapping to ensure text remains visible during font loading.

**Section sources**
- [tailwind.config.ts](file://tailwind.config.ts#L1-L98)
- [index.css](file://src/index.css#L1-L249)

## Language Extension

The sc-dof platform supports multiple languages through a context-based internationalization system. The `LanguageContext` provides a `t` function for translation lookups and manages the current language state. Currently, the platform supports Arabic (`ar`), English (`en`), and Turkish (`tr`), with Arabic being the default language.

To add a new language, extend the `Language` type in `LanguageContext.tsx` with the appropriate language code, then add a new entry to the `translations` object. Each translation entry should follow the same key structure as existing languages, with keys organized by component and purpose (e.g., `nav.home`, `hero.title`). The translation system uses dot notation to organize keys hierarchically.

Components access translations through the `useLanguage` hook, which provides the current language, a function to change the language, the translation function `t`, and a boolean indicating whether the current language is right-to-left (RTL). The `LanguageSwitcher` component renders buttons for each available language, with visual feedback for the currently selected language.

When adding a new language, ensure that all existing translation keys are provided with appropriate values. Missing translations will fall back to the key itself, which may not be user-friendly. The platform automatically applies RTL layout for Arabic content by setting the `dir` attribute on the root element, which affects text direction and component layout.

**Section sources**
- [LanguageContext.tsx](file://src/contexts/LanguageContext.tsx#L1-L292)
- [App.tsx](file://src/App.tsx#L1-L43)

## Event Content Updates

Event-specific content is managed in `eventData.ts`, which exports a configuration object containing all text and metadata for the Liberation Day celebration. This includes the event title, date, venue information, goals, agenda items, and organizer details. The data structure is designed to be easily modified without requiring code changes to components.

To update the event agenda, modify the `agenda` array in `eventData.ts`. Each agenda item includes a time label, title, description, and emoji icon. When adding new agenda items, follow the existing format and ensure that translations are updated in `LanguageContext.tsx` for all supported languages. The agenda component uses the translation function to display localized content, so new agenda items require corresponding translation keys.

For organizer information, the `organizers` array contains details about the hosting organizations. Each organizer includes a name, description, mission statement (for the primary organizer), and activities. When updating organizer information, provide content in all supported languages by adding corresponding entries in the translation system.

The event date and time are defined in multiple formats to support different display contexts. The `date` field uses ISO format for programmatic use, while `dateFormatted` provides a human-readable version. When updating the event date, ensure both fields are updated consistently.

**Section sources**
- [eventData.ts](file://src/data/eventData.ts#L1-L109)
- [AgendaSection.tsx](file://src/components/AgendaSection.tsx#L1-L64)
- [OrganizersSection.tsx](file://src/components/OrganizersSection.tsx#L1-L132)

## RTL Compatibility and Best Practices

The sc-dof platform maintains RTL compatibility through a combination of CSS variables, Tailwind directives, and React context. The `LanguageContext` tracks whether the current language requires RTL layout, and this value is used to set the `dir` attribute on the root element in `App.tsx`. This approach ensures that all native HTML text direction features work correctly for Arabic content.

When customizing the platform, follow these best practices to maintain RTL compatibility:

1. Use semantic HTML and avoid absolute positioning when possible, as these are more likely to work correctly in both LTR and RTL contexts.
2. Utilize Tailwind's built-in RTL support by using logical properties (e.g., `start` and `end` instead of `left` and `right`) when available.
3. Test all visual changes in both Arabic and non-Arabic languages to ensure proper layout in both directions.
4. When adding new icons or emoji, ensure they are culturally appropriate and do not carry unintended meanings in different contexts.
5. Maintain consistent typography by using the appropriate font for each language (Koufiya for Arabic, Roboto for others).

For theme customization, ensure that any new colors have appropriate contrast ratios in both light and dark modes. The platform's color system is designed to work with both modes, so new colors should be defined as CSS variables with values for both light and dark contexts.

When adding new content, provide translations for all supported languages to maintain a consistent user experience. The translation system is hierarchical, so new keys should follow the existing naming convention (e.g., `component.purpose`).

**Section sources**
- [App.tsx](file://src/App.tsx#L1-L43)
- [LanguageContext.tsx](file://src/contexts/LanguageContext.tsx#L1-L292)
- [index.css](file://src/index.css#L1-L249)