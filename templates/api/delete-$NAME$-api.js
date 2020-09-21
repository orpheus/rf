import { $NAME_UNDER$Controller } from 'Constants/urls'
import { deleteRequest } from 'utils/request-wrapper'

/**
 * @param id
 * @param options
 * @returns {Promise<undefined|*>}
 */
export default function delete$NAME_CAPITALIZE$Api (id, options) {
  return deleteRequest({
    route: `${$NAME_UNDER$Controller}/${id}`,
    ...options
  })
}
