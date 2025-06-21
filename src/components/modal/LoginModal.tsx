import Modal from "../ui/Modal";
import { X } from "phosphor-react";

export default function (){
    return (
        <Modal>
            <div>
                <div className="flex">
                    <div className="flex-1">
                        <X/>
                    </div>
                    <div className="flex-1">
                        Logo
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="">
                        Sign in
                    </div>               
                </div>
            </div>
        </Modal>
    )
}