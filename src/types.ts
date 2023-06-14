import { FC, PropsWithChildren } from "react";

export type TFC<TProps = Record<string, unknown>> = FC<PropsWithChildren<TProps>>;
