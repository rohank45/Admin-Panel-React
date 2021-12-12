import React from "react";
import { GrView } from "react-icons/gr";

const NewJoinTable = () => {
  return (
    <>
      <div className="overflow-x-hidden border rounded-lg font-nunito">
        <p className="text-2xl font-semibold my-3">New Join Members</p>
        <table className="table">
          <thead>
            <tr>
              <th className="text-2xl font-semibold">Members</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                <th>
                  <button className="flex justify-center items-center gap-2 font-semibold text-gray-500">
                    <GrView className="text-xl" />
                    View
                  </button>
                </th>
              </td>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                <th>
                  <button className="flex justify-center items-center gap-2 font-semibold text-gray-500">
                    <GrView className="text-xl" />
                    View
                  </button>
                </th>
              </td>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                <th>
                  <button className="flex justify-center items-center gap-2 font-semibold text-gray-500">
                    <GrView className="text-xl" />
                    View
                  </button>
                </th>
              </td>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                <th>
                  <button className="flex justify-center items-center gap-2 font-semibold text-gray-500">
                    <GrView className="text-xl" />
                    View
                  </button>
                </th>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewJoinTable;
