import { isAuthorized } from "utils/helper"

export const selectIsLoggedIn = (state) => state.user.loggedIn

export const selectUserRoles = (state) => state.user.userData.roles

export const selectUserRole = (state) =>
    isAuthorized(state.user.userData.roles, ["admin", "superadmin"])
        ? "admin"
        : isAuthorized(state.user.userData.roles, ["faculty"])
        ? "faculty"
        : isAuthorized(state.user.userData.roles, ["staff"])
        ? "staff"
        : ""

export const selectUsername = (state) => state.user.userData.username

export const selectDisplayName = (state) => state.user.userData.displayName

export const selectEmailAddress = (state) => state.user.userData.email

export const selectUserData = (state) => state.user.userData

export const selectNotifications = (state) => state.user.notifications

export const selectUnreadNotifications = (state) => state.user.unreadNotifications

export const selectIsUserLoading = (state) => state.user.loading

export const selectIsUserInitialLoading = (state) => state.user.initialLoading

export const selectViewMode = (state) => state.user.viewMode

export const selectIsAdmin = (state) => isAuthorized(state.user.userData.roles, ["admin", "superadmin"])

export const selectIsFaculty = (state) => isAuthorized(state.user.userData.roles, ["faculty"])

export const selectIsStaff = (state) => isAuthorized(state.user.userData.roles, ["staff"])

export const selectBookingDetails = (state) => state.user.bookingDetails

export const selectEventsDetails = (state) => state.user.bookingDetails

export const selectAllBookingRequests = (state) => state.user.allBookingRequests
