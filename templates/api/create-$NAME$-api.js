import { $NAME_UNDER$Controller } from 'Constants/urls'
import { post } from 'utils/request-wrapper'

/**
 * @param $NAME_UNDER$
 * @param options
 * @returns {Promise<undefined|*>}
 */
export default function create$NAME_CAPITALIZE$Api ($NAME_UNDER$, options) {
  return post({
    route: $NAME_UNDER$Controller,
    data: $NAME_UNDER$,
    ...options
  })
}
