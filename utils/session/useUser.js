import { cookies } from "next/headers"
import { unsealData } from "iron-session"
import { ironConfig } from "lib/config"

export default async function useUser() {
  const cookie = cookies().get(ironConfig.cookieName)

  if (cookie?.value) {
    const data = await unsealData(cookie.value, {password: ironConfig.password})
    const user = data?.user
    if (user?.isLoggedIn)
      return { isLoggedIn: true, ...user }
  }

  return { isLoggedIn: false}
}