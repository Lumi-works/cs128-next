"use client";

import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

const lectures = () => {
  return (
    <div className="w-full px-4 mx-auto flex flex-col items-center justify-between">
      <h1 className="text-3xl mt-8 font-bold mb-4">Lecture Schedules</h1>

      <div className="flex flex-col w-full max-w-[800px] mb-4 gap-2">
        <p className="font-bold">Semester Progress: </p>
        <Progress className="[&>*]:bg-blue-500" value={33} max={100} />
      </div>

      <div className="mb-4">
        <p className="m-3 max-w-[800px] text-left">
          Looking for assistance with your coursework? We've got you covered
          with office hours available both in-person and virtually! In-person
          sessions take place in the Siebel basement, while virtual office hours
          are conducted via Zoom. To join either session, simply add yourself.
          If you're attending an in-person session, please make sure you're
          present in the Siebel Basement before adding yourself to the{" "}
          <a
            href="https://queue.illinois.edu/q/"
            className="font-bold hover:text-blue-500"
          >
            {" "}
            Queue
          </a>
          . Additionally, the Zoom link for virtual office hours is available on
          the
          <a
            href="https://queue.illinois.edu/q/"
            className="font-bold hover:text-blue-500"
          >
            {" "}
            Queue
          </a>{" "}
          page.
        </p>
      </div>

      {/* WEEK 16 || WEEK 16 */}
      <div className="flex flex-col w-full max-w-[800px] gap-2 mb-4">
        <h5 className="font-bold">Week 16</h5>
        <div className="flex flex-col md:flex-row w-full items-stretch">
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>
                <Link href="/" className="navbar-link">
                  DFS & BFS
                </Link>
              </CardTitle>
              <CardDescription>Mon, 04 Dec</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-2">
              <div>
                <p>Opening Today:</p>
                <Link href="/" className={badgeVariants({ variant: "blue" })}>
                  HW: Homework Homework
                </Link>
              </div>

              <div>
                <p>Due Today:</p>
                <Link href="/" className={badgeVariants({ variant: "green" })}>
                  MP: Mountain Path
                </Link>
              </div>

              <div>
                <p>Due Tuesday:</p>
                <Link href="/" className={badgeVariants({ variant: "yellow" })}>
                  Lab: Interesting
                </Link>
              </div>

              <div>
                <p>Quiz Registration Start:</p>
                <Link href="/" className={badgeVariants({ variant: "red" })}>
                  Quiz: Quiz 4
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>Wed, 06 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>CFri, 08 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* WEEK 15 || WEEK 15 */}
      <div className="flex flex-col w-full max-w-[800px] gap-2 mb-4">
        <h5 className="font-bold">Week 15</h5>
        <div className="flex flex-col md:flex-row w-full items-stretch">
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>
                <Link href="/" className="navbar-link">
                  DFS & BFS
                </Link>
              </CardTitle>
              <CardDescription>Mon, 04 Dec</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-2">
              <div>
                <p>Opening Today:</p>
                <Link href="/" className={badgeVariants({ variant: "blue" })}>
                  HW: Homework Homework
                </Link>
              </div>

              <div>
                <p>Due Today:</p>
                <Link href="/" className={badgeVariants({ variant: "green" })}>
                  MP: Mountain Path
                </Link>
              </div>

              <div>
                <p>Due Tuesday:</p>
                <Link href="/" className={badgeVariants({ variant: "orange" })}>
                  Lab: Interesting
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>Wed, 06 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>CFri, 08 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default lectures;
