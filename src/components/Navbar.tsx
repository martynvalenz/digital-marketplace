import Link from "next/link"
import { MaxWidthWrapper } from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import { NavItems } from "./NavItems"
import { buttonVariants } from "./ui/button"
import { Cart } from "./Cart"


export const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  {/* <Icons className="w-10 h-10"/> */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.68 14.98H6V9h1.71c1.28 0 1.71 1.03 1.71 1.71v2.56c0 .68-.42 1.71-1.74 1.71zm4.7-3.52v1.07H11.2v1.39h1.93v1.07h-2.25c-.4.01-.74-.31-.75-.71V9.75c-.01-.4.31-.74.71-.75h2.28v1.07H11.2v1.39h1.18zm4.5 2.77c-.48 1.11-1.33.89-1.71 0L13.77 9h1.18l1.07 4.11L17.09 9h1.18l-1.39 5.23z"/><path fill="currentColor" d="M7.77 10.12h-.63v3.77h.63c.14 0 .28-.05.42-.16c.14-.1.21-.26.21-.47v-2.52c0-.21-.07-.37-.21-.47a.72.72 0 0 0-.42-.15z"/></svg>
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                  {
                    user ? null:(<Link href="/sign-in" className={buttonVariants({variant:'outline'})}>Sign In</Link>)
                  }
                  {
                    user ? null:(<span className="h-6 w-px bg-gray-200" aria-hidden="true"/>)
                  }
                  {
                    user ? null:(<Link href="/sign-up" className={buttonVariants()}>Sign Up</Link>)
                  }
                  {
                    user ? (<span className="h-6 w-px bg-gray-200" aria-hidden="true"/>):null
                  }
                  {
                    user ? null:(<div className="flex lg:ml-6">
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true"/>
                    </div>)
                  }
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}
