import {app} from '../firebase';
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";

import { useEffect, useState } from "react";

const auth = getAuth(app)