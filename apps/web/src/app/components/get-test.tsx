"use client";

import type { GetTestResponse } from "@monorepo/types";
import { Card, CardContent, CardHeader } from "@monorepo/ui/components/card";
import { cn } from "@monorepo/utils/styles";
import { useEffect, useState } from "react";

const GetTest = () => {
  const [test, setTest] = useState<string>("");

  useEffect(() => {
    const fetchTest = async () => {
      const response = await fetch("http://localhost:8080/test");
      const data: GetTestResponse = await response.json();
      setTimeout(() => {
        setTest(data.message);
      }, 3000);
    };
    fetchTest();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <h1
            className={cn(
              "text-xl text-yellow-500",
              test !== "" && "text-green-500"
            )}
          >
            Get Test
          </h1>
        </CardHeader>
        <CardContent>
          <p>{test}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GetTest;
