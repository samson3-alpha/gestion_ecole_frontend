import { useNavigate } from "react-router-dom";

function ClassItem(props) {

    const navigate = useNavigate();
    const handleClickClass = (id) => navigate('/ClassDetails/' + id);

    return (
        <div 
            onClick={() => { handleClickClass(props.classe._id) }}
            className="m-2 max-w-sm space-y-2 bg-white cursor-pointer sm:py-4 sm:flex sm:itms-center sm:space-y-0 sm:gap-x-6"
        >
            <div className="flex flex-col py-3 justify-between min-h-[50px] w-60 bg-gradient-to-r from-indigo-200 via-cyan-200 to-pink-200 shadow-xl rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center space-y-2 sm:text-left">
                <div className="text-center space-y-4 flex-grow">
                    <p className="text-xl text-black font-semibold">
                        {props.classe.nom}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {props.classe.nbEleves} Elèves
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ClassItem;