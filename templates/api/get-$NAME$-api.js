import { $NAME_UNDER$Controller } from 'Constants/urls'
import { get } from 'utils/request-wrapper'

/**
 * @param id
 * @param options
 * @returns {Promise<undefined|*>}
 */
export default function get$NAME_CAPITALIZE$Api (id, options) {
  return get({
    route: `${$NAME_UNDER$Controller}/${id}`,
    ...options
  })
}
