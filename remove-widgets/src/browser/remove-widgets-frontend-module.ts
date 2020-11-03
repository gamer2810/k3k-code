/**
 * Generated using theia-extension-generator
 */
import { RemoveWidgetsCommandContribution } from './remove-widgets-contribution';
import {
    FrontendApplicationContribution
} from "@theia/core/lib/browser";
import { ContainerModule } from "inversify";
export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(FrontendApplicationContribution).to(RemoveWidgetsCommandContribution);
});
