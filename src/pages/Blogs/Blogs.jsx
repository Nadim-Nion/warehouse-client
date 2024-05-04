import React from 'react';

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-7'>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Q1. Difference between JavaScript & Node.js?</h2>
                        <p>JavaScript is a programming language used primarily for client-side scripting in web browsers. Node.js, on the other hand, is a runtime environment that allows the execution of JavaScript code server-side. Node.js extends JavaScript capabilities beyond the browser, enabling developers to build scalable network applications using JavaScript on the server side.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Q2. When should you use Node.js and MongoDB?</h2>
                        <p>Node.js and MongoDB are a good combination for developing scalable, real-time applications that handle a large volume of data. Use Node.js for server-side logic and handling asynchronous operations efficiently. MongoDB is suitable when you need a flexible, schema-less database that can store and manage large amounts of unstructured data, ideal for applications like social networks, IoT platforms, or real-time analytics.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Q3. Differences b/w SQL and NoSQL Database?</h2>
                        <p>SQL databases are relational and use structured query language for defining and manipulating data. They have predefined schemas and are suitable for complex queries and transactions. NoSQL databases are non-relational, schema-flexible, and use various data models (document, key-value, graph, etc.). They are designed for scalability, high availability, and handling large volumes of unstructured or semi-structured data efficiently.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Q4. What is the purpose of JWT and how does it work?</h2>
                        <p>JWT (JSON Web Token) is a compact, self-contained token used for securely transmitting information between parties as a JSON object. Its purpose is to authenticate and authorize users in applications without storing session state on the server. JWTs are composed of three parts: header, payload, and signature. The server creates a JWT upon successful authentication, signs it using a secret key, and sends it to the client. The client can then include this token in subsequent requests to access protected resources. The server verifies the tokens signature to authenticate and authorize the user.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;