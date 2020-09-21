import { $NAME_UNDER$sController } from 'Constants/urls'
import { get } from 'utils/request-wrapper'

/**
 * @param options
 * @returns {Promise<undefined|*>}
 */
export default function get$NAME_CAPITALIZE$sApi (options) {
  return get({
    route: $NAME_UNDER$sController,
    ...options
  })
}
