import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../src/services/api-github";

const apiGithub = axios.create({
 baseURL: "https://api.github.com",
});

export default apiGithub;