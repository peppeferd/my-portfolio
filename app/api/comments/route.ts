import Comment from '../../../models/commentModel'
import { connectDB } from '../../../config/dbConfig'
import { NextRequest, NextResponse } from 'next/server'

connectDB()
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { name, comment } = reqBody

    const newComment = new Comment({
      name,
      comment,
    })

    const data = await newComment.save()

    return NextResponse.json({
      message: 'Comment created successfully',
      sucess: true,
      data: data,
    })
  } catch (err) {
    console.log(err)
  }
}

export async function GET(request: NextRequest) {
  try {
    const comments = await Comment.find()

    return NextResponse.json(comments)
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
