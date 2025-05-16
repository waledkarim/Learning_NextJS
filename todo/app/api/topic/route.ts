import connectDB from "@/app/_lib/db";
import Topic from "@/app/_models/topicModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const { title, description } = await request.json();
    await connectDB();
    await Topic.create({title, description});
    return NextResponse.json({message: "Topic created"}, {status: 201});
}

export async function GET(){
    await connectDB();
    const topics = await Topic.find();
    return NextResponse.json(topics);
}

export async function DELETE(request: NextRequest){
    await connectDB();
    const topicId = request.nextUrl.searchParams.get('id');
    await Topic.findByIdAndDelete(topicId);
    return NextResponse.json({message: "Topic deleted"});
}