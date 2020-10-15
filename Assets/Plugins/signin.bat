echo off
title Sign In to AltspaceVR
curl -v -d "user[email]=carlos.ruizvelasco2917@alumnos.udg.mx &user[password]=Birote123" https://account.altvr.com/users/sign_in.json -c cookie
