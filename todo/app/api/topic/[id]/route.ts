import connectDB from "@/app/_lib/db";
import Topic from "@/app/_models/topicModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }){
    await connectDB();
    console.log(params);
    const { id: topicId } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await Topic.findByIdAndUpdate(topicId, {title, description});
    return NextResponse.json({message: "Topic updated"});
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }){
    await connectDB();
    console.log(params);
    const { id: topicId } = params;
    const topic = await Topic.findOne({_id: topicId});
    return NextResponse.json(topic, {status: 200});
}