import i18n from '../plugins/i18n'

export default {
  email: [
    v => !!v || i18n.t('errors.required'),
    v => /.+@.+/.test(v) || i18n.t('errors.invalidEmail'),
  ],
  required: [
    v => !!v || i18n.t('errors.required'),
  ],
}
