# eslint-config-dimax

This package contains the shareable ESLint configuration used by [Dimax Organization](https://github.com/dimax);

## How to use it

### For server-side rules

```js
'use strict';

module.exports = {
  extends: ['@dimax-ar/dimax/server'],
};
```

### For client-side (vue) rules

```js
'use strict';

module.exports = {
  extends: ['@dimax-ar/dimax/vue'],
};
```

### For cypress folder

```js
'use strict';

module.exports = {
  extends: ['@dimax-ar/dimax/cypress'],
};
```
