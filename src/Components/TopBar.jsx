function TopBar() {

    return (
        <>
            <div className="bg-white shadow-md p-4 flex items-center justify-between">
                <div className="text-xl font-semibold">Dashboard</div>
                <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Welcome, User</span>
                    <button className="bg-purple-600 text-white py-1 px-4 rounded-lg hover:bg-purple-800">Logout</button>
                </div>
            </div>
        </>
    )
}

export default TopBar;