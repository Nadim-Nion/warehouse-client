import React from 'react';

const RestockBook = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 m-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h4 className='text-2xl font-bold text-center mt-3'>Restock this item</h4>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add Quantity</span>
                                </label>
                                <input type="text" placeholder="add quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Restock</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestockBook;