import { useState } from "react";
import Modal from "./modal";
import { section } from "motion/react-client";


const ModalPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <section className="mt-8">
            <button
                className='bg-sm-D-blue-400 text-sm-bunker-950 px-4 py-2 mb-8 rounded-md hover:bg-gradient-to-b from-sm-D-blue-400 to-sm-D-blue-600 duration-300 hover:scale-110 active:scale-95 active:duration-200'
                onClick={openModal}
            >
                Contact me
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Software Engineer" >
                <p className="font-semibold text-lg text-cyan-500">Numero de Contacto</p>
                <p className="text-zinc-950">315-855-0683</p>
                <p className="font-semibold  text-lg text-cyan-500">Correo Electronico</p>
                <dl className="flex items-center justify-between">
                    <p className="text-zinc-950">sara.ojeda@campusucc.edu.c</p>
                    <a className="duration-300 text-slate-50 flex items-center rounded-3xl p-3 bg-blue-500 gap-3 
                            shadow-xl hover:border-hidden hover:scale-110 active:scale-95 active:duration-200 
                            hover:shadow-2xl transition-all" href="mailto:sara.ojeda@campusucc.edu.co">Escribir Correo</a>
                </dl>
            </Modal>
        </section>
    )

};

export default ModalPage
