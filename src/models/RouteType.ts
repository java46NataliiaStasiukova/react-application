import { Component, ReactNode } from "react";

export type RouteType = {
    path: string;
    label: string;
    element: ReactNode;
    icon: ReactNode;
    authenticated?: boolean; //if true - route item may be shown only if a client is authenticated
    //TODO additional property
    userAccess?: boolean;
}