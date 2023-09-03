import React from "react";
const UserProfile = () => {

    return (
        <div>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div
                    class="w-[50rem] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#B0BEC5] dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Create Your Account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="" method="post">

                            <div>
                                <label for="username"
                                    class="block mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-black">Username</label>

                                <input type="text" name="username" id="username"
                                    class="bg-gray-600 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""></input>
                            </div>
                            <div>
                                <label for="email"
                                    class="block mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-black">Email</label>

                                <input type="email" name="email" id="email"
                                    class="bg-gray-600 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@doamin" required=""></input>
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-xl font-bold tracking-tight text-gray-600 dark:text-black">
                                    Password</label>

                                <input type="password" name="password" id="password" placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""></input>
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-center h-5">

                                    <input id="terms" aria-describedby="terms" type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required=""></input>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-black dark:text-black">I accept the <a
                                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button aria-label="Login with Google" type="submit"
                                class="flex items-center bg-gray-600 justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-gray-600 hover:bg-gray-600 ">
                                <path
                                    d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z">
                                </path>
                                <p class=" bg-gray-600 text-bold text-lg hover:bg-gray-600">Register</p>
                            </button>
                        </form>
                        <div class="flex items-center w-full my-4">
                            <hr class="w-full" />
                            <p class="px-3 ">OR</p>
                            <hr class="w-full" />
                        </div>
                        <div class="my-6 space-y-2 ">
                            <button aria-label="Login with Google" type="button"
                                class="flex items-center bg-gray-600 justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-gray-600 hover:bg-gray-600 ">

                                <p class=" bg-gray-600  hover:bg-gray-600 text-bold text-lg"> Login with Google</p>
                            </button>
                        </div>
                        <p class="text-sm font-light text-gray-500 dark:text-black">
                            Already have an account? <a href=""
                                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                here</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
}
export default UserProfile;