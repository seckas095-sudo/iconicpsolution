# Local fonts

Original variable TrueType fonts from the official Google Fonts repository:

- Cormorant Garamond: https://github.com/google/fonts/tree/main/ofl/cormorantgaramond
- Manrope: https://github.com/google/fonts/tree/main/ofl/manrope

Both fonts are distributed under the SIL Open Font License, included alongside
the files. `app/layout.tsx` loads them with `next/font/local`, so builds do not
download fonts and the site serves them from its own assets.
