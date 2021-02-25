# vuelp-pseudo

## install environment

```
npm install
```

## examples
### generate lp of us company beRich

```
npm run output:us_beRich
```

The following pseudo code is generated

https://gist.github.com/aStanleyLiang/e0626cad09e2203f67bf3164da2f5096

### generate lp of us company makeMoney

```
npm run output:us_makeMoney
```

The following pseudo code is generated

https://gist.github.com/aStanleyLiang/5dfc8f1c46c735f3f51ce13af01c79ab

### generate lp of sg company sgx

```
npm run output:sg_sgx
```

The following pseudo code is generated

https://gist.github.com/aStanleyLiang/75975e79a23f041a9d18d2418c5a53fe

## How validator is generated
Validator definitions are as the following:
* [validator.json](https://github.com/aStanleyLiang/vuelp-pseudo/blob/main/src/validator/definition/validator.json)
* [validator.countries.json](https://github.com/aStanleyLiang/vuelp-pseudo/blob/main/src/validator/definition/validator.countries.json)
* [validator.package-delivery.json](https://github.com/aStanleyLiang/vuelp-pseudo/blob/main/src/validator/definition/validator.package-delivery.json)
* [validator.customer.xxx.json](https://github.com/aStanleyLiang/vuelp-pseudo/blob/main/src/validator/definition/validator.customer.sgx.json)

*validatorSelector* generate the actual validator for vueLP based on the above json files. the flow is as the following:
1. *validator.json* as the default object of validator
2. merge specific country validator if it's defined in *validator.countries.json*
3. merge validator for specifc usage, e.g. UPS and Fadex which are package deliver if it's defined in *validator.<special purpose>.json*
4. merge validator customized by customers, e.g. *validator.customer.sgx.json*

Then the combination of validators is as the following:
```javascript
{
  address: { isRequired: true, regex: 'en length 40' },
  city: { isRequired: true, regex: 'non empty' },
  state: { isRequired: true, regex: 'non empty' },
  zipcode: { isRequired: true, regex: 'non empty' },
  tel: { isRequired: true, regex: 'non empty' }
}
```

Basically you can treat the priorites of all validators as
```javascript
customer > specific usage > country > default
```

## How inputs are generated
Specific customer's settings are defined as 
* setting.xxx.json 
The inputs to render for specific customer's lp (landing page) are as the following:
1. *inputController* read setting.xxx.json
2. *dispatchers* are iterated to pick the mapping component by *type* and *inputType*
3. validators for specific usage are injected to components for specific usage

The generated inputs are as the following
```javascript
[
  {
    title: '購入商品',
    labels: [ { display: '必填' } ],
    render: { name: 'ProductDefault', validator: {} }
  },
  {
    title: '收件地址',
    labels: [ { display: '必填' } ],
    render: {
      name: 'AddressDefault',
      validator: {
        address: { isRequired: true, regex: 'en length 40' },
        city: { isRequired: true, regex: 'non empty' },
        state: { isRequired: true, regex: 'non empty' },
        zipcode: { isRequired: true, regex: 'non empty' },
        tel: { isRequired: true, regex: 'non empty' }
      }
    }
  }
]

```
