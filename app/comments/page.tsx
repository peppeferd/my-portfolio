'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { message, Table } from 'antd'
import { Button, Form, Input } from 'antd'

import TextArea from 'antd/es/input/TextArea'
import { Audio, BallTriangle } from 'react-loader-spinner'
const Comments = () => {
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState<any>(null)
  function getDatas() {
    setLoading(true)
    fetch('/api/comments')
      .then((res) => res.json())
      .then((data) => {
        setComments(data)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDatas()
  }, [])
  console.log(comments)

  const onSubmit = async (values: any[]) => {
    await axios.post('/api/comments', values)
    message.success('Comment added')
    getDatas()
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
    },
  ]

  return (
    <div className="h-full min-h-screen bg-gradient-to-r from-green-500 to-indigo-500">
      <div className="flex flex-col py-6">
        <Form
          name="basic"
          /*  labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }} */
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item<any>
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="w-72 rounded-md" />
          </Form.Item>

          <Form.Item<any>
            label="Comment"
            name="comment"
            rules={[{ required: true, message: 'Please input your comment!' }]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-gray-400 ml-5"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      {loading ? (
        <div>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#FFFFCC"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="mt-5 scorrimento bg-white">
          <Table columns={columns} dataSource={comments} pagination={false} />
        </div>
      )}
    </div>
  )
}

export default Comments
