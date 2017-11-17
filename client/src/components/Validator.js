import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'


export default function validateInput(data) {
  let errors = {}

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
    errors.email_valid = false
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Email'
    errors.email_valid = false
  }
  if (Validator.isEmpty(data.full_name)) {
    errors.full_name = 'Full name is required'
    errors.full_name_valid = false
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
    errors.password_valid = false
  }

  return { errors, isValid: isEmpty(errors) }
}
