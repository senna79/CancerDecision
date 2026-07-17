import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "./session";

export async function guardAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}
