import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
            <div className="max-w-screen-lg w-full">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                    <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                        Add New Item
                    </button>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* Cards for Total Sales, Total Users, New Orders, Feedback */}
                    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
                        <h2 className="text-xl font-semibold text-gray-700">Total Sales</h2>
                        <p className="text-3xl font-bold text-blue-600 mb-1">$15,000</p>
                        <p className="text-gray-500">This month</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
                        <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
                        <p className="text-3xl font-bold text-blue-600 mb-1">1,200</p>
                        <p className="text-gray-500">Active users</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
                        <h2 className="text-xl font-semibold text-gray-700">New Orders</h2>
                        <p className="text-3xl font-bold text-blue-600 mb-1">300</p>
                        <p className="text-gray-500">This week</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
                        <h2 className="text-xl font-semibold text-gray-700">Feedback</h2>
                        <p className="text-3xl font-bold text-blue-600 mb-1">98%</p>
                        <p className="text-gray-500">Positive feedback</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activities</h2>
                    <table className="min-w-full bg-white border rounded-lg shadow">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Activity</th>
                                <th className="py-2 px-4 border-b">Date</th>
                                <th className="py-2 px-4 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">User signed up</td>
                                <td className="py-2 px-4 border-b">2024-10-14</td>
                                <td className="py-2 px-4 border-b text-green-600">Completed</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">New order created</td>
                                <td className="py-2 px-4 border-b">2024-10-14</td>
                                <td className="py-2 px-4 border-b text-green-600">Completed</td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">Payment received</td>
                                <td className="py-2 px-4 border-b">2024-10-14</td>
                                <td className="py-2 px-4 border-b text-green-600">Completed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;