"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, CalendarClock } from "lucide-react";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DateFactory from "@/lib/DateFactory";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function JournalEntriesCalendar({ entries }) {
  const [year, setYear] = useState(localStorage.getItem("lastVisitedYear") ?? DateFactory.getTodayDate().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(DateFactory.getTodayDate().getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Sets the year whenever user navgiates between years
  useEffect(() => {
    localStorage.setItem('lastVisitedYear', year.toString());
  }, [year]);
    

  const entryMap = useMemo(() => {
    const map = new Map();
    if (entries != null || entries != undefined) {
      entries.forEach((entry) => {
        let date = new Date(entry.date + 'T00:00:00');
        const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        map.set(dateKey, entry);
      });
    }
    return map;
  }, [entries]);

  const getEntry = (year, month, day) => {
    const dateKey = `${year}-${month}-${day}`;
    return entryMap.get(dateKey);
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => {
    return DateFactory.createDateFromNumbers(year, month + 1, 0).getDate()
  };

  const getFirstDayOfMonth = (month, year) => {
    return DateFactory.createDateFromNumbers(year, month, 1).getDay()
  };

  const generateMonthGrid = (month) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const grid = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      grid.push(week);
      if (day > daysInMonth) break;
    }

    return grid;
  };

  const DayCell = ({ day, month }) => {
    if (!day)
      return (
        <div className="aspect-square flex items-center justify-center text-xs text-muted-foreground/25">
          {day}
        </div>
      );

    const entry = getEntry(year, month, day);

    if (!entry)
      return (
        <div
          className={cn(
            "aspect-square flex items-center justify-center rounded-sm text-xs",
            "hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {day}
        </div>
      );

    return (
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Link
            href={{ pathname: `/journal/read/${entry.date}` }}
            className={cn(
              "aspect-square flex items-center justify-center rounded-sm text-xs",
              "bg-primary/15 text-primary hover:bg-primary/25 transition-colors",
              "active:scale-95"
            )}
          >
            {day}
          </Link>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px]">
          <div className="space-y-1">
            <p className="font-medium">{entry.title}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    );
  };

  const MonthGrid = ({ month, monthIndex }) => (
    <div
      key={month}
      className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div className="border-b px-3 py-1.5">
        <h2 className="font-medium text-sm">{month}</h2>
      </div>
      <div className="p-1.5">
        <div className="grid grid-cols-7 gap-0.5">
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] font-medium text-muted-foreground"
            >
              {day[0]}
            </div>
          ))}
          {generateMonthGrid(monthIndex).map((week, i) => (
            <React.Fragment key={i}>
              {week.map((day, j) => (
                <DayCell key={`${i}-${j}`} day={day} month={monthIndex} />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );

  // Navigation for mobile view
  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      let newMonth = prev + direction;
      if (newMonth > 11) {
        setYear(year + 1);
        return 0;
      }
      if (newMonth < 0) {
        setYear(year - 1);
        return 11;
      }
      return newMonth;
    });
  };

  return (
    <TooltipProvider>
      <div className="flex h-full flex-col p-4">
        {/* Desktop view header */}
        <div className="hidden sm:flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{year}</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setYear(year - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setYear(DateFactory.getTodayDate().getFullYear());
                setCurrentMonth(DateFactory.getTodayDate().getMonth());
              }}
              className="hover:text-primary"
            >
              <CalendarClock className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setYear(year + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile view header */}
        <div className="sm:hidden flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">{months[currentMonth]}</h1>
            <span className="text-xl font-bold">{year}</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth(-1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth(1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop view - all months grid */}
        <div className="hidden sm:grid gap-4 grid-cols-12 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3">
          {months.map((month, monthIndex) => (
            <MonthGrid key={month} month={month} monthIndex={monthIndex} />
          ))}
        </div>

        {/* Mobile view - single month */}
        <div className="sm:hidden w-full">
          <MonthGrid month={months[currentMonth]} monthIndex={currentMonth} />
        </div>
      </div>
    </TooltipProvider>
  );
}
