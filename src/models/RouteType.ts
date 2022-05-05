import { Component, ReactNode } from "react";

export type RouteType = {
    path: string;
    label: string;
    element: ReactNode;
    icon: ReactNode;
}