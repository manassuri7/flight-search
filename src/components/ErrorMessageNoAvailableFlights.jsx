function ErrorMessageNoAvailableFlights () {

    return (
        <article className="NoAvailableFlightsError">
            <p>Sorry, we do not have flights available with the selected parameters.</p>
            <p>Please try searching again.</p>

            <img alt="Plane icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ni40Nzk1MyA0NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI4Ny45OTYwOTQgMjI0LjIyMjY1Ni05NS4wMjM0MzgtMTA3Ljg5ODQzNy0zMi45NzY1NjIuNTkzNzUgNDggMTA3LjMwNDY4NyIgZmlsbD0iI2ZkYmUxNCIgZGF0YS1vcmlnaW5hbD0iI2VkMWMyNCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ2Mi43MzQzNzUgMjY4LjYzNjcxOS0zMy4yOTY4NzUtMTkuNDI1NzgxIDEuNzE4NzUgMy40MzM1OTNjMS45NzY1NjIgMy45NTMxMjUuMzc1IDguNzYxNzE5LTMuNTgyMDMxIDEwLjczNDM3NWwtMTYgOGMtMS4xMDkzNzUuNTU0Njg4LTIuMzM1OTM4Ljg0Mzc1LTMuNTc4MTI1Ljg0Mzc1aC0zMnYtMTZoMzAuMTEzMjgxbDcuMTUyMzQ0LTMuNTc4MTI1LTguNDY0ODQ0LTE2Ljk1MzEyNWMtMTYuNTgyMDMxLTcuNTM5MDYyLTM0LjU4MjAzMS0xMS40NDkyMTgtNTIuODAwNzgxLTExLjQ2ODc1aC0yNzJsLTQwLTgwaC0zMmwxNiA5Ni03LjA5Mzc1IDMuNTQyOTY5Yy02LjM0Mzc1IDMuMTQ0NTMxLTkuODg2NzE5IDEwLjA2NjQwNi04LjczNDM3NSAxNy4wNTA3ODEgMS4xNDg0MzcgNi45ODQzNzUgNi43MjY1NjIgMTIuNDAyMzQ0IDEzLjc0MjE4NyAxMy4zNDc2NTZsMTQ2LjA4NTkzOCAyMC4xMjg5MDcgNzIgOS45Mjk2ODcgNzEuNzE0ODQ0IDYuNTE5NTMyYzI0LjE1NjI1IDEuNzQyMTg3IDQ4LjQxNzk2OCAxLjMzMjAzMSA3Mi41MDM5MDYtMS4yMjY1NjNsMjEuMTQ0NTMxLTIuNjQwNjI1YzE0LjA4NTkzNy0xLjc2MTcxOSAyNy44NTU0NjktNS40OTIxODggNDAuOTAyMzQ0LTExLjA4NTkzOGwxNS4xOTkyMTktNi41MTE3MThjNC4wMTk1MzEtMS43MjI2NTYgNi43MjY1NjItNS41NjI1IDYuOTk2MDkzLTkuOTI5Njg4LjI2OTUzMS00LjM2MzI4MS0xLjk0NTMxMi04LjUwNzgxMi01LjcyMjY1Ni0xMC43MTA5Mzd6bTAgMCIgZmlsbD0iI2YyZjJmMiIgZGF0YS1vcmlnaW5hbD0iI2YyZjJmMiIgc3R5bGU9IiI+PC9wYXRoPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzAwYmJkNiI+PHBhdGggZD0ibTQwNi4xMDkzNzUgMjU2LjIyMjY1NmgtMzAuMTEzMjgxdjE2aDMyYzEuMjM4MjgxLjAxMTcxOSAyLjQ2NDg0NC0uMjYxNzE4IDMuNTc4MTI1LS44MDA3ODFsMTYtOGMzLjk1NzAzMS0xLjk3NjU2MyA1LjU1ODU5My02Ljc4MTI1IDMuNTgyMDMxLTEwLjczODI4MWwtMS43MTg3NS0zLjQyOTY4OC0xMi45NjA5MzgtNy41NjI1Yy0zLjc4OTA2Mi0yLjE4NzUtNy42OTE0MDYtNC4xNzU3ODEtMTEuNjg3NS01Ljk1NzAzMWw4LjQ3MjY1NyAxNi45NDkyMTl6bTAgMCIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwYmJkNiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMDMuOTk2MDk0IDI0MC4yMjI2NTZoMTZ2MTZoLTE2em0wIDAiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMGJiZDYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMTM1Ljk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDBiYmQ2IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE2Ny45OTYwOTQgMjQwLjIyMjY1NmgxNnYxNmgtMTZ6bTAgMCIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwYmJkNiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTkuOTk2MDk0IDI0MC4yMjI2NTZoMTZ2MTZoLTE2em0wIDAiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMGJiZDYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMjMxLjk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDBiYmQ2IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTI2My45OTYwOTQgMjQwLjIyMjY1NmgxNnYxNmgtMTZ6bTAgMCIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwYmJkNiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yOTUuOTk2MDk0IDI0MC4yMjI2NTZoMTZ2MTZoLTE2em0wIDAiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMGJiZDYiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDYzLjk5NjA5NCAxMDAuMjIyNjU2YzAtMTEuMDQ2ODc1LTguOTUzMTI1LTIwLTIwLTIwLTQuNTM1MTU2LjAxNTYyNS04LjkzMzU5NCAxLjU4OTg0NC0xMi40NDUzMTMgNC40NjA5MzggMi40MjU3ODEtMTIuODEyNS01Ljg0Mzc1LTI1LjIxMDkzOC0xOC42MDE1NjItMjcuODk4NDM4LTEyLjc2MTcxOS0yLjY5MTQwNi0yNS4zMjgxMjUgNS4zMTY0MDYtMjguMjgxMjUgMTguMDE5NTMyLTMuODEyNS0yLjQ5MjE4OC04LjUxNTYyNS0zLjIyMjY1Ny0xMi45MTAxNTctMi4wMTE3MTktNC4zOTQ1MzEgMS4yMTQ4NDMtOC4wNTQ2ODcgNC4yNTc4MTItMTAuMDQ2ODc0IDguMzU1NDY5LTYuMDQ2ODc2LTEuOTI1NzgyLTEyLjY0NDUzMi0uODI0MjE5LTE3LjczODI4MiAyLjk1MzEyNC01LjA5NzY1NiAzLjc3NzM0NC04LjA2MjUgOS43NzczNDQtNy45NzY1NjIgMTYuMTIxMDk0IDAgOS41MDM5MDYgNi42ODc1IDE3LjY5NTMxMyAxNiAxOS41OTc2NTZ2LjQwMjM0NGg5NnYtLjQwMjM0NGM5LjMxNjQwNi0xLjkwMjM0MyAxNi4wMDM5MDYtMTAuMDkzNzUgMTYtMTkuNTk3NjU2em0wIDAiIGZpbGw9IiNlNmU2ZTYiIGRhdGEtb3JpZ2luYWw9IiNlNmU2ZTYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDMuOTk2MDk0IDQ0NC4yMjI2NTZjMC0xMS4wNDY4NzUtOC45NTMxMjUtMjAtMjAtMjAtNC41MzUxNTYuMDE1NjI1LTguOTMzNTk0IDEuNTg5ODQ0LTEyLjQ0NTMxMyA0LjQ2MDkzOCAyLjQyNTc4MS0xMi44MTI1LTUuODQzNzUtMjUuMjEwOTM4LTE4LjYwMTU2Mi0yNy44OTg0MzgtMTIuNzYxNzE5LTIuNjkxNDA2LTI1LjMyODEyNSA1LjMxNjQwNi0yOC4yODEyNSAxOC4wMTk1MzItMy44MTI1LTIuNDkyMTg4LTguNTE1NjI1LTMuMjIyNjU3LTEyLjkxMDE1Ny0yLjAxMTcxOS00LjM5NDUzMSAxLjIxNDg0My04LjA1NDY4NyA0LjI1NzgxMi0xMC4wNDY4NzQgOC4zNTU0NjktNi4wNDY4NzYtMS45MjU3ODItMTIuNjQ0NTMyLS44MjQyMTktMTcuNzM4MjgyIDIuOTUzMTI0LTUuMDk3NjU2IDMuNzc3MzQ0LTguMDYyNSA5Ljc3NzM0NC03Ljk3NjU2MiAxNi4xMjEwOTQgMCA5LjUwMzkwNiA2LjY4NzUgMTcuNjk1MzEzIDE2IDE5LjU5NzY1NnYuNDAyMzQ0aDk2di0uNDAyMzQ0YzkuMzE2NDA2LTEuOTAyMzQzIDE2LjAwMzkwNi0xMC4wOTM3NSAxNi0xOS41OTc2NTZ6bTAgMCIgZmlsbD0iI2U2ZTZlNiIgZGF0YS1vcmlnaW5hbD0iI2U2ZTZlNiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE0My45OTYwOTQgNTIuMjIyNjU2YzAtMTEuMDQ2ODc1LTguOTUzMTI1LTIwLTIwLTIwLTQuNTM1MTU2LjAxNTYyNS04LjkzMzU5NCAxLjU4OTg0NC0xMi40NDUzMTMgNC40NjA5MzggMi40MjU3ODEtMTIuODEyNS01Ljg0Mzc1LTI1LjIxMDkzOC0xOC42MDE1NjItMjcuODk4NDM4LTEyLjc2MTcxOS0yLjY5MTQwNi0yNS4zMjgxMjUgNS4zMTY0MDYtMjguMjgxMjUgMTguMDE5NTMyLTMuODEyNS0yLjQ5MjE4OC04LjUxNTYyNS0zLjIyMjY1Ny0xMi45MTAxNTctMi4wMTE3MTktNC4zOTQ1MzEgMS4yMTQ4NDMtOC4wNTQ2ODcgNC4yNTc4MTItMTAuMDQ2ODc0IDguMzU1NDY5LTYuMDQ2ODc2LTEuOTI1NzgyLTEyLjY0NDUzMi0uODI0MjE5LTE3LjczODI4MiAyLjk1MzEyNC01LjA5NzY1NiAzLjc3NzM0NC04LjA2MjUgOS43NzczNDQtNy45NzY1NjIgMTYuMTIxMDk0IDAgOS41MDM5MDYgNi42ODc1IDE3LjY5NTMxMyAxNiAxOS41OTc2NTZ2LjQwMjM0NGg5NnYtLjQwMjM0NGM5LjMxNjQwNi0xLjkwMjM0MyAxNi4wMDM5MDYtMTAuMDkzNzUgMTYtMTkuNTk3NjU2em0wIDAiIGZpbGw9IiNlNmU2ZTYiIGRhdGEtb3JpZ2luYWw9IiNlNmU2ZTYiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xODMuOTk2MDk0IDI3Mi4yMjI2NTYgODggOC0xNDQgMTI4LTMyLTh6bTAgMCIgZmlsbD0iI2ZkYmUxNCIgZGF0YS1vcmlnaW5hbD0iI2VkMWMyNCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTc5Ljk5NjA5NCAyMjQuMjIyNjU2aC01OC42NjQwNjNsLTEzLjMzNTkzNy04MGgzMnptMCAwIiBmaWxsPSIjZmRiZTE0IiBkYXRhLW9yaWdpbmFsPSIjZWQxYzI0IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjAuNzk2ODc1IDI4Mi4wNjI1IDEzNCAxOC40ODQzNzUtNjUuMzkwNjI1IDk1LjE0NDUzMWMtMS40ODQzNzUgMi4xNjAxNTYtMS44MTY0MDYgNC45MTAxNTYtLjg4NjcxOSA3LjM1OTM3NS45MjU3ODEgMi40NTMxMjUgMi45OTIxODggNC4yOTI5NjkgNS41MzUxNTcgNC45Mjk2ODhsMzIgOGMyLjU2NjQwNi42NDQ1MzEgNS4yODUxNTYtLjAxOTUzMSA3LjI2MTcxOC0xLjc3NzM0NGwxMTMuOTQ1MzEzLTEwMS4yODUxNTYgNjMuNzE4NzUgNS43ODkwNjJjOC4xNjc5NjkuNzQ2MDk0IDE4LjQwMjM0MyAxLjA5NzY1NyAyOC45Njg3NSAxLjA5NzY1NyAxNS4xMTcxODcuMDgyMDMxIDMwLjIzMDQ2OS0uNzAzMTI2IDQ1LjI1NzgxMi0yLjM1MTU2M2wyMS4xNDQ1MzEtMi42NDA2MjVjMTQuODI4MTI2LTEuODUxNTYyIDI5LjMyNDIxOS01Ljc4MTI1IDQzLjA2MjUtMTEuNjcxODc1bDE1LjE5OTIxOS02LjUxMTcxOWM2Ljc5Njg3NS0yLjkxNDA2MiAxMS4zNzUtOS40MDYyNSAxMS44MjgxMjUtMTYuNzg5MDYyLjQ1NzAzMi03LjM4MjgxMy0zLjI4OTA2Mi0xNC4zOTA2MjUtOS42NzU3ODEtMTguMTEzMjgybC00Ni4yNTc4MTMtMjYuOTg0Mzc0Yy0yMC43OTY4NzQtMTIuMTIxMDk0LTQ0LjQzNzUtMTguNTExNzE5LTY4LjUxMTcxOC0xOC41MTk1MzJoLTYwLjM4MjgxM2wtOTIuNjMyODEyLTEwNS4xODc1Yy0xLjU4NTkzOC0xLjcxNDg0NC0zLjgxMjUtMi42OTkyMTgtNi4xNTIzNDQtMi43MTA5MzdsLTMyLjk3MjY1Ni41OTM3NWMtMi42OTkyMTkuMDQyOTY5LTUuMTkxNDA3IDEuNDM3NS02LjYzMjgxMyAzLjcxODc1LTEuNDQ1MzEyIDIuMjc3MzQzLTEuNjQ0NTMxIDUuMTI4OTA2LS41MjczNDQgNy41ODU5MzdsNDIuOTU3MDMyIDk2aC0xMTAuNzEwOTM4bC0zNy43NDIxODctNzUuNTc4MTI1Yy0xLjM2MzI4MS0yLjcyNjU2Mi00LjE1NjI1LTQuNDQxNDA2LTcuMjAzMTI1LTQuNDIxODc1aC0zMmMtMi4zNTE1NjMgMC00LjU4MjAzMiAxLjAzNTE1Ni02LjEwMTU2MyAyLjgyODEyNS0xLjUxOTUzMSAxLjc5Njg3NS0yLjE3MTg3NSA0LjE3MTg3NS0xLjc4NTE1NiA2LjQ4ODI4MWwxNS4wMjM0MzcgOTAuMTY3OTY5LTEuODA4NTkzLjkwNjI1Yy05LjQ0NTMxMyA0LjcyNjU2My0xNC43MTg3NSAxNS4wNTA3ODEtMTMuMDAzOTA3IDI1LjQ3NjU2MyAxLjcxNDg0NCAxMC40MjU3ODEgMTAuMDExNzE5IDE4LjUxOTUzMSAyMC40NzY1NjMgMTkuOTcyNjU2em0xMDUuMDM5MDYzIDExNy4zNTkzNzUtMTYuNzE4NzUtNC4xODM1OTQgNzguODE2NDA2LTExNC42NDA2MjUgNjQuOTQ1MzEyIDUuOTAyMzQ0LTExLjA2NjQwNiA5LjgzMjAzMS0xLjA5Mzc1LS4xMDkzNzUtLjEwNTQ2OSAxLjE1NjI1em00Ni40MDIzNDMtMjc0LjczODI4MSAxNy4xODM1OTQtLjMxMjUgODAuODcxMDk0IDkxLjg1MTU2MmgtNTcuMTA5Mzc1em0tMTQwLjM1MTU2MiAxMTQuMjE4NzUtMTQuNDQxNDA3LTg2LjY3OTY4OGgxNy42MDE1NjNsMzcuNzgxMjUgNzUuNTc0MjE5YzEuMzU5Mzc1IDIuNzE0ODQ0IDQuMTMyODEzIDQuNDI5Njg3IDcuMTY3OTY5IDQuNDI1NzgxaDI3MmMyMC41OTM3NS4wMTk1MzIgNDAuODMyMDMxIDUuMzM1OTM4IDU4Ljc3NzM0NCAxNS40Mzc1bDIuNDg4MjgxIDQuOTg0Mzc1LTcuMTUyMzQ0IDMuNTc4MTI1aC0zMC4xMTMyODF2MTZoMzJjMS4yMzgyODEuMDExNzE5IDIuNDY0ODQ0LS4yNjE3MTggMy41NzgxMjUtLjgwMDc4MWwxNi04YzEuNjEzMjgxLS44NDc2NTYgMi44ODI4MTItMi4yMjI2NTYgMy41OTc2NTYtMy44OTg0MzdsMjcuNTMxMjUgMTYuMDY2NDA2YzEuMTc5Njg3LjY3NTc4MSAxLjg3NSAxLjk2MDkzNyAxLjc4OTA2MyAzLjMyMDMxMi0uMDgyMDMyIDEuMzU5Mzc1LS45Mjk2ODggMi41NTA3ODItMi4xODM1OTQgMy4wNzgxMjVsLTE1LjE5OTIxOSA2LjUxMTcxOWMtMTIuMzU5Mzc1IDUuMjk2ODc1LTI1LjQwMjM0NCA4LjgzMjAzMS0zOC43NDIxODcgMTAuNTAzOTA2bC0yMS4xNDQ1MzIgMi42NDA2MjVjLTIzLjUxNTYyNSAyLjUwNzgxMy00Ny4yMDcwMzEgMi45MDYyNS03MC43OTI5NjggMS4xOTE0MDdsLTQ4LjgwMDc4Mi00LjQyOTY4OCAxMy42NTYyNS0xMi4xMzY3MTljMi40NTMxMjUtMi4xMDU0NjkgMy40MDIzNDQtNS40NzY1NjIgMi40MDIzNDQtOC41NDY4NzUtMS0zLjA3NDIxOC0zLjc1LTUuMjQyMTg3LTYuOTY4NzUtNS41bC04OC04Yy0yLjg4MjgxMi0uMjYxNzE4LTUuNjc1NzgxIDEuMDU0Njg4LTcuMzEyNSAzLjQzNzVsLTEyLjQ0OTIxOSAxOC4xNjAxNTYtMTQxLjk2MDkzNy0xOS42MDkzNzRjLTMuNTE1NjI1LS40ODgyODItNi4zMDg1OTQtMy4yMTA5MzgtNi44ODI4MTMtNi43MTg3NS0uNTc4MTI1LTMuNTAzOTA3IDEuMTk1MzEzLTYuOTc2NTYzIDQuMzcxMDk0LTguNTY2NDA3bDcuMDg5ODQ0LTMuNTQ2ODc1YzMuMTQ0NTMxLTEuNTcwMzEyIDQuODk0NTMxLTUuMDExNzE4IDQuMzEyNS04LjQ3NjU2MnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTAzLjk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTM1Ljk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTY3Ljk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTk5Ljk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjMxLjk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjYzLjk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjk1Ljk5NjA5NCAyNDAuMjIyNjU2aDE2djE2aC0xNnptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDM5LjA5Mzc1IDcyLjY2MDE1NmMtMy4xMTMyODEtMTIuNzY5NTMxLTEzLjcxODc1LTIyLjMzOTg0NC0yNi43NDIxODgtMjQuMTI1LTEzLjAyMzQzNy0xLjc4NTE1Ni0yNS44MTI1IDQuNTc0MjE5LTMyLjI1IDE2LjAzOTA2My04LjE3OTY4Ny0xLjM3MTA5NC0xNi40OTIxODcgMS41NTA3ODEtMjIuMDE1NjI0IDcuNzM0Mzc1LTE0LjE5MTQwNy0xLjA1NDY4OC0yNi45MTc5NjkgOC43MDcwMzEtMjkuNTc4MTI2IDIyLjY5MTQwNi0yLjY2MDE1NiAxMy45ODA0NjkgNS41ODk4NDQgMjcuNzMwNDY5IDE5LjE3OTY4OCAzMS45NjQ4NDQgMS4yODUxNTYuODIwMzEyIDIuNzgxMjUgMS4yNTc4MTIgNC4zMDg1OTQgMS4yNTc4MTJoOTZjMS40MTc5NjggMCAyLjgwNDY4Ny0uNDAyMzQ0IDQtMS4xNjAxNTYgMTMuMzM1OTM3LTMuOTY0ODQ0IDIxLjc0MjE4Ny0xNy4xMTcxODggMTkuNzM0Mzc1LTMwLjg4MjgxMi0yLjAxMTcxOS0xMy43NjU2MjYtMTMuODIwMzEzLTIzLjk3MjY1Ny0yNy43MzQzNzUtMjMuOTU3MDMyLTEuNjQ0NTMyIDAtMy4yODUxNTYuMTQ0NTMyLTQuOTAyMzQ0LjQzNzV6bTE2LjkwMjM0NCAyNy41NjI1Yy4wMDM5MDYgNS43MDMxMjUtNC4wMTE3MTkgMTAuNjE3MTg4LTkuNTk3NjU2IDExLjc1NzgxMy0uMzA0Njg4LjA2MjUtLjYwMTU2My4xNDQ1MzEtLjg5ODQzOC4yNDIxODdoLTkxYy0uMjk2ODc1LS4wOTc2NTYtLjYwMTU2Mi0uMTc5Njg3LS45MTAxNTYtLjI0MjE4Ny02LjA0Mjk2OS0xLjIyNjU2My0xMC4xNzE4NzUtNi44MzU5MzgtOS41NTA3ODItMTIuOTY4NzUuNjIxMDk0LTYuMTM2NzE5IDUuNzkyOTY5LTEwLjgwMDc4MSAxMS45NTcwMzItMTAuNzg5MDYzIDEuMTY0MDYyLjAyMzQzOCAyLjMxNjQwNi4yMjY1NjMgMy40MTc5NjguNTg5ODQ0IDMuNzM0Mzc2IDEuMTIxMDk0IDcuNzMwNDY5LS42MTMyODEgOS40NjQ4NDQtNC4xMDU0NjkgMS4wMjM0MzgtMi4wMDc4MTIgMi44NDM3NS0zLjQ5NjA5MyA1LjAxOTUzMi00LjEwNTQ2OSAyLjE3MTg3NC0uNjA1NDY4IDQuNS0uMjc3MzQzIDYuNDE3OTY4LjkwNjI1IDIuMTkxNDA2IDEuNDE3OTY5IDQuOTMzNTk0IDEuNjc5Njg4IDcuMzUxNTYzLjcwMzEyNiAyLjQxNzk2OS0uOTc2NTYzIDQuMjA3MDMxLTMuMDc0MjE5IDQuNzkyOTY5LTUuNjEzMjgyIDIuMTMyODEyLTguMjY5NTMxIDEwLjM5ODQzNy0xMy4zOTQ1MzEgMTguNzUzOTA2LTExLjYyODkwNiA4LjM1NTQ2OCAxLjc2NTYyNSAxMy44Mzk4NDQgOS43OTI5NjkgMTIuNDQ1MzEyIDE4LjIxODc1LS42MjEwOTQgMy4yOTI5NjkuODc1IDYuNjIxMDk0IDMuNzQ2MDk0IDguMzQzNzUgMi44NzUgMS43MjY1NjIgNi41MTU2MjUgMS40NzY1NjIgOS4xMjg5MDYtLjYyMTA5NCAzLjU3MDMxMy0yLjk0NTMxMiA4LjUyNzM0NC0zLjU1MDc4MSAxMi43MDMxMjUtMS41NTQ2ODcgNC4xNzU3ODEgMS45OTYwOTMgNi44MTI1IDYuMjM4MjgxIDYuNzU3ODEzIDEwLjg2NzE4N3ptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjgzLjk5NjA5NCA0MTYuMjIyNjU2Yy0xLjY0NDUzMiAwLTMuMjg1MTU2LjE0NDUzMi00LjkwMjM0NC40Mzc1LTMuMTEzMjgxLTEyLjc2OTUzMS0xMy43MTg3NS0yMi4zMzk4NDQtMjYuNzQyMTg4LTI0LjEyNS0xMy4wMjM0MzctMS43ODUxNTYtMjUuODEyNSA0LjU3NDIxOS0zMi4yNSAxNi4wMzkwNjMtOC4xNzk2ODctMS4zNzEwOTQtMTYuNDkyMTg3IDEuNTUwNzgxLTIyLjAxNTYyNCA3LjczNDM3NS0xNC4xOTE0MDctMS4wNTQ2ODgtMjYuOTE3OTY5IDguNzA3MDMxLTI5LjU3ODEyNiAyMi42OTE0MDYtMi42NjAxNTYgMTMuOTgwNDY5IDUuNTg5ODQ0IDI3LjczMDQ2OSAxOS4xNzk2ODggMzEuOTY0ODQ0IDEuMjg1MTU2LjgyMDMxMiAyLjc4MTI1IDEuMjU3ODEyIDQuMzA4NTk0IDEuMjU3ODEyaDk2YzEuNDE3OTY4IDAgMi44MDQ2ODctLjQwMjM0NCA0LTEuMTYwMTU2IDEzLjMzNTkzNy0zLjk2NDg0NCAyMS43NDIxODctMTcuMTE3MTg4IDE5LjczNDM3NS0zMC44ODI4MTItMi4wMTE3MTktMTMuNzY1NjI2LTEzLjgyMDMxMy0yMy45NzI2NTctMjcuNzM0Mzc1LTIzLjk1NzAzMnptMi40MDIzNDQgMzkuNzU3ODEzYy0uMzA0Njg4LjA2MjUtLjYwMTU2My4xNDQ1MzEtLjg5ODQzOC4yNDIxODdoLTkxYy0uMjk2ODc1LS4wOTc2NTYtLjYwMTU2Mi0uMTc5Njg3LS45MTAxNTYtLjI0MjE4Ny02LjA0Mjk2OS0xLjIyNjU2My0xMC4xNzE4NzUtNi44MzU5MzgtOS41NTA3ODItMTIuOTY4NzUuNjIxMDk0LTYuMTM2NzE5IDUuNzkyOTY5LTEwLjgwMDc4MSAxMS45NTcwMzItMTAuNzg5MDYzIDEuMTY0MDYyLjAyMzQzOCAyLjMxNjQwNi4yMjY1NjMgMy40MTc5NjguNTg5ODQ0IDMuNzM0Mzc2IDEuMTIxMDk0IDcuNzMwNDY5LS42MTMyODEgOS40NjQ4NDQtNC4xMDU0NjkgMS4wMjM0MzgtMi4wMDc4MTIgMi44NDM3NS0zLjUgNS4wMTU2MjUtNC4xMDkzNzUgMi4xNzU3ODEtLjYwNTQ2OCA0LjUwMzkwNy0uMjc3MzQ0IDYuNDIxODc1LjkxMDE1NiAyLjE5MTQwNiAxLjQxNzk2OSA0LjkzMzU5NCAxLjY3OTY4OCA3LjM1MTU2My43MDMxMjYgMi40MTc5NjktLjk3NjU2MyA0LjIwNzAzMS0zLjA3NDIxOSA0Ljc5Mjk2OS01LjYxMzI4MiAyLjEzMjgxMi04LjI2OTUzMSAxMC4zOTg0MzctMTMuMzk0NTMxIDE4Ljc1MzkwNi0xMS42Mjg5MDYgOC4zNTU0NjggMS43NjU2MjUgMTMuODM5ODQ0IDkuNzkyOTY5IDEyLjQ0NTMxMiAxOC4yMTg3NS0uNjIxMDk0IDMuMjkyOTY5Ljg3NSA2LjYyMTA5NCAzLjc0NjA5NCA4LjM0Mzc1IDIuODc1IDEuNzI2NTYyIDYuNTE1NjI1IDEuNDc2NTYyIDkuMTI4OTA2LS42MjEwOTQgMy44NzEwOTQtMy4xNjc5NjggOS4zMDQ2ODgtMy42MDE1NjIgMTMuNjI4OTA2LTEuMDg1OTM3IDQuMzI4MTI2IDIuNTE1NjI1IDYuNjM2NzE5IDcuNDQ5MjE5IDUuNzk2ODc2IDEyLjM4MjgxMi0uODM1OTM4IDQuOTMzNTk0LTQuNjQ4NDM4IDguODI4MTI1LTkuNTYyNSA5Ljc3MzQzOHptMCAwIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTE5LjA5Mzc1IDI0LjY2MDE1NmMtMy4xMTMyODEtMTIuNzY5NTMxLTEzLjcxODc1LTIyLjMzOTg0NC0yNi43NDIxODgtMjQuMTI1LTEzLjAyMzQzNy0xLjc4NTE1Ni0yNS44MTI1IDQuNTc0MjE5LTMyLjI1IDE2LjAzOTA2My04LjE3OTY4Ny0xLjM3NS0xNi40OTIxODcgMS41NDY4NzUtMjIuMDE1NjI0IDcuNzM0Mzc1LTE0LjE5MTQwNy0xLjA1NDY4OC0yNi45MTc5NjkgOC43MDcwMzEtMjkuNTc4MTI2IDIyLjY5MTQwNi0yLjY2MDE1NiAxMy45ODA0NjkgNS41ODk4NDQgMjcuNzMwNDY5IDE5LjE3OTY4OCAzMS45NjQ4NDQgMS4yODUxNTYuODIwMzEyIDIuNzgxMjUgMS4yNTc4MTIgNC4zMDg1OTQgMS4yNTc4MTJoOTZjMS40MTc5NjggMCAyLjgwNDY4Ny0uNDAyMzQ0IDQtMS4xNjAxNTYgMTMuMzM1OTM3LTMuOTY0ODQ0IDIxLjc0MjE4Ny0xNy4xMTcxODggMTkuNzM0Mzc1LTMwLjg4MjgxMi0yLjAxMTcxOS0xMy43NjU2MjYtMTMuODIwMzEzLTIzLjk3MjY1Ny0yNy43MzQzNzUtMjMuOTU3MDMyLTEuNjQ0NTMyIDAtMy4yODUxNTYuMTQ0NTMyLTQuOTAyMzQ0LjQzNzV6bTE2LjkwMjM0NCAyNy41NjI1Yy4wMDM5MDYgNS43MDMxMjUtNC4wMTE3MTkgMTAuNjE3MTg4LTkuNTk3NjU2IDExLjc1NzgxMy0uMzA0Njg4LjA2MjUtLjYwMTU2My4xNDQ1MzEtLjg5ODQzOC4yNDIxODdoLTkxYy0uMjk2ODc1LS4wOTc2NTYtLjU5NzY1Ni0uMTc5Njg3LS45MDIzNDQtLjI0MjE4Ny02LjA0Mjk2OC0xLjIyNjU2My0xMC4xNzE4NzUtNi44MzIwMzEtOS41NTA3ODEtMTIuOTY0ODQ0LjYxNzE4Ny02LjEzMjgxMyA1Ljc4NTE1Ni0xMC44MDA3ODEgMTEuOTQ5MjE5LTEwLjc5Mjk2OSAxLjE2NDA2Mi4wMjM0MzggMi4zMTY0MDYuMjI2NTYzIDMuNDE3OTY4LjU4OTg0NCAzLjczNDM3NiAxLjEyMTA5NCA3LjczMDQ2OS0uNjEzMjgxIDkuNDY0ODQ0LTQuMTA1NDY5IDEuMDIzNDM4LTIuMDA3ODEyIDIuODQzNzUtMy41IDUuMDE1NjI1LTQuMTA5Mzc1IDIuMTc1NzgxLS42MDU0NjggNC41MDM5MDctLjI3NzM0NCA2LjQyMTg3NS45MTAxNTYgMi4xOTE0MDYgMS40MTc5NjkgNC45MzM1OTQgMS42Nzk2ODggNy4zNTE1NjMuNzAzMTI2IDIuNDE3OTY5LS45NzY1NjMgNC4yMDcwMzEtMy4wNzQyMTkgNC43OTI5NjktNS42MTMyODIgMi4xMzI4MTItOC4yNjk1MzEgMTAuMzk4NDM3LTEzLjM5NDUzMSAxOC43NTM5MDYtMTEuNjI4OTA2IDguMzU1NDY4IDEuNzY1NjI1IDEzLjgzOTg0NCA5Ljc5Mjk2OSAxMi40NDUzMTIgMTguMjE4NzUtLjYyMTA5NCAzLjI5Mjk2OS44NzUgNi42MjEwOTQgMy43NDYwOTQgOC4zNDM3NSAyLjg3NSAxLjcyNjU2MiA2LjUxNTYyNSAxLjQ3NjU2MiA5LjEyODkwNi0uNjIxMDk0IDMuNTcwMzEzLTIuOTQ1MzEyIDguNTI3MzQ0LTMuNTUwNzgxIDEyLjcwMzEyNS0xLjU1NDY4NyA0LjE3NTc4MSAxLjk5NjA5MyA2LjgxMjUgNi4yMzgyODEgNi43NTc4MTMgMTAuODY3MTg3em0wIDAiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
        </article>
    )
    
}

export default ErrorMessageNoAvailableFlights