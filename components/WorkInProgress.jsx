"use client";

import React, { useEffect, useState } from "react";
import { Progress } from "./ui/progress";

const WorkInProgress = ({ value }) => {
  return (
    <div>
      <Progress value={value} />
    </div>
  );
};

export default WorkInProgress;
