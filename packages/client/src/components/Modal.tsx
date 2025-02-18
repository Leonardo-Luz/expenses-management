import { ReactNode } from "react";

type modalProps = {
  children: ReactNode
}

export const Modal = ({ children }: modalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md" />
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg w-[40vw] relative">
        {children}
      </div>
    </div>
  );
};

export const ConfirmModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-start mt-[40vh] ml-[43vw]">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md" />
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-lg w-[40vw] relative">
        <p>Are you sure?</p>
        <div className="flex justify-end mt-4">
          <button className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Yes</button>
          <button className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">No</button>
        </div>
      </div>
    </div>
  );
};
