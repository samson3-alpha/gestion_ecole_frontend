import Layout from "../Components/Layout";
import Sidebar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";

function Dashboard() {

    return (
        <Layout>

            {/* <!-- Cards / Stats --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-700">Total d'Eleves</h3>
                    <p className="text-2xl font-bold text-gray-900">$8,400</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-700">Nombre de classes</h3>
                    <p className="text-2xl font-bold text-gray-900">1,230</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-700">Nombre de professeurs</h3>
                    <p className="text-2xl font-bold text-gray-900">150</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-700">Total de frais perçu - Frais restant</h3>
                    <p className="text-2xl font-bold text-gray-900">150</p>
                </div>
            </div>

            {/* <!-- Chart / Content Section --> */}
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-700">Recent Activity</h3>
                <div className="h-64 bg-gray-200 mt-4">
                    {/* <!-- Placeholder for a chart --> */}
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard;