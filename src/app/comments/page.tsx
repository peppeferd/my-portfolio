"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, Table } from "antd";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Comments = () => {
  const [comments, setComments] = useState<any>(null);
  function getDatas() {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }
  useEffect(() => {
    getDatas();
  }, []);
  console.log(comments);

  const onSubmit = async (values: any[]) => {
    await axios.post("/api/comments", values);
    message.success("Comment added");
    getDatas();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
  ];

  return (
    <div className="h-full bg-cover bg-center bg-tech2">
      <div className="bg-indigo-500 w-fit p-5 rounded-lg">
        <h1>
          Leave your comment here below, i will be glad to hear from you and
          answer 😄
        </h1>
      </div>
      <div>
        <Form
          name="basic"
          /*  labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }} */
          /*    initialValues={{ remember: true }} */
          onFinish={onSubmit}
          autoComplete="off"
        >
          <div className="bg-gray-200 w-fit p-3 rounded-lg mt-3">
           
            <Form.Item<any>
              label="Insert your nickname"
              name="name"
              rules={[
                { required: true, message: "Please input your nickname!" },
              ]}
            >
              <input className="rounded-md w-fit" />
            </Form.Item>

            <Form.Item<any>
              label="Insert your comment"
              name="comment"
              rules={[
                { required: true, message: "Please input your comment!" },
              ]}
            >
              <textarea className="resize-none h-[250px] rounded-md w-full" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-indigo-600 mt-3">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="mt-5 scorrimento bg-white overflow-auto">
        <Table columns={columns} dataSource={comments} pagination={false} />
      </div>
    </div>
  );
};

export default Comments;
