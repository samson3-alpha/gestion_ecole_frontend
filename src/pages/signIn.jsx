function SignIn() {

    return(
        <>
            <div className="w-full h-screen flex items-center justify-center max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign In</h2>
                <form action="/login" method="POST">
                    <div className="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required/>
                    </div>

                    <div className="mb-6">
                        <label for="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required/>
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                            <label for="remember" className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">Forgot password?</a>
                    </div>

                    <button type="submit" className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign In</button>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-700">Sign up</a></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignIn;