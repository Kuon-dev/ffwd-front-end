// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/about': RouteRecordInfo<'/about', '/about', Record<never, never>, Record<never, never>>,
    '/admin': RouteRecordInfo<'/admin', '/admin', Record<never, never>, Record<never, never>>,
    '/admin/': RouteRecordInfo<'/admin/', '/admin', Record<never, never>, Record<never, never>>,
    '/admin/feedback/': RouteRecordInfo<'/admin/feedback/', '/admin/feedback', Record<never, never>, Record<never, never>>,
    '/admin/manage/admin': RouteRecordInfo<'/admin/manage/admin', '/admin/manage/admin', Record<never, never>, Record<never, never>>,
    '/admin/manage/user': RouteRecordInfo<'/admin/manage/user', '/admin/manage/user', Record<never, never>, Record<never, never>>,
    '/admin/profile/': RouteRecordInfo<'/admin/profile/', '/admin/profile', Record<never, never>, Record<never, never>>,
    '/course': RouteRecordInfo<'/course', '/course', Record<never, never>, Record<never, never>>,
    '/course/': RouteRecordInfo<'/course/', '/course', Record<never, never>, Record<never, never>>,
    '/course/[lang]/': RouteRecordInfo<'/course/[lang]/', '/course/:lang', { lang: ParamValue<true> }, { lang: ParamValue<false> }>,
    '/course/[lang]/[topic]': RouteRecordInfo<'/course/[lang]/[topic]', '/course/:lang/:topic', { lang: ParamValue<true>, topic: ParamValue<true> }, { lang: ParamValue<false>, topic: ParamValue<false> }>,
    '/course/[lang]/quiz/': RouteRecordInfo<'/course/[lang]/quiz/', '/course/:lang/quiz', { lang: ParamValue<true> }, { lang: ParamValue<false> }>,
    '/course/[lang]/quiz/feedback': RouteRecordInfo<'/course/[lang]/quiz/feedback', '/course/:lang/quiz/feedback', { lang: ParamValue<true> }, { lang: ParamValue<false> }>,
    '/course/[lang]/score/[score_id]': RouteRecordInfo<'/course/[lang]/score/[score_id]', '/course/:lang/score/:score_id', { lang: ParamValue<true>, score_id: ParamValue<true> }, { lang: ParamValue<false>, score_id: ParamValue<false> }>,
    '/forgot-password': RouteRecordInfo<'/forgot-password', '/forgot-password', Record<never, never>, Record<never, never>>,
    '/forum': RouteRecordInfo<'/forum', '/forum', Record<never, never>, Record<never, never>>,
    '/forum/': RouteRecordInfo<'/forum/', '/forum', Record<never, never>, Record<never, never>>,
    '/forum/[id]': RouteRecordInfo<'/forum/[id]', '/forum/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/forum/create': RouteRecordInfo<'/forum/create', '/forum/create', Record<never, never>, Record<never, never>>,
    '/login': RouteRecordInfo<'/login', '/login', Record<never, never>, Record<never, never>>,
    '/register': RouteRecordInfo<'/register', '/register', Record<never, never>, Record<never, never>>,
    '/reset-password': RouteRecordInfo<'/reset-password', '/reset-password', Record<never, never>, Record<never, never>>,
    '/terms-conditions': RouteRecordInfo<'/terms-conditions', '/terms-conditions', Record<never, never>, Record<never, never>>,
    '/test': RouteRecordInfo<'/test', '/test', Record<never, never>, Record<never, never>>,
    '/user/': RouteRecordInfo<'/user/', '/user', Record<never, never>, Record<never, never>>,
    '/user/profile/': RouteRecordInfo<'/user/profile/', '/user/profile', Record<never, never>, Record<never, never>>,
    '/verify-email': RouteRecordInfo<'/verify-email', '/verify-email', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
