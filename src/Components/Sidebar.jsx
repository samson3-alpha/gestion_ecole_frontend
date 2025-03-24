import TopBar from "./TopBar";

function Sidebar({children}) {

    return (

        <div className="w-64 bg-slate-600 text-white">
    <div className="flex items-center justify-center p-6 text-2xl font-semibold">
        Dashboard
    </div>
    <ul className="space-y-2 p-4">

        <li>
            <a href="/dashboard" className="block p-2 rounded-md hover:bg-slate-700">Accueil</a>
        </li>
        <li>
            <a href="/classes" className="block p-2 rounded-md hover:bg-slate-700">Classes</a>
        </li>
        <li>
            <a href="/professeurs" className="block p-2 rounded-md hover:bg-slate-700">Professeurs</a>
        </li>
        <li>
            <a href="/eleves" className="block p-2 rounded-md hover:bg-slate-700">Eleves</a>
        </li>
        <li>
            <a href="#" className="block p-2 rounded-md hover:bg-slate-700">Effectuer un paiement</a>
        </li>
    </ul>
</div>
    )

}

export default Sidebar;