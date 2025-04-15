"use client";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Paper,
  CardMedia,
  Divider,
  useMediaQuery,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Check, Circle, Paid, ArrowOutward } from "@mui/icons-material";
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

// ====== CUSTOM STEP ICON ======
const GreenStepIconRoot = styled("div")(({ ownerState }) => ({
  color: ownerState.completed || ownerState.active ? "#A6D02E" : "#ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 30,
  height: 30,
  borderRadius: "50%",
  border: `2px solid ${
    ownerState.completed || ownerState.active ? "#A6D02E" : "#ccc"
  }`,
  backgroundColor: "#fff",
  zIndex: 1,
}));

const ProgressWithLabels = ({ leftLabel, rightLabel, value }) => {
  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#b0b4bb",
            fontWeight: 100,
            fontSize: "0.7rem",
          }}
        >
          {leftLabel}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#b0b4bb",
            fontWeight: 100,
            fontSize: "0.7rem",
          }}
        >
          {rightLabel}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          borderRadius: 5,
          height:"0.3rem",
          bgcolor: "#eaecf0",
          "& .MuiLinearProgress-bar": {
            bgcolor: "#8a6dff",
          },
        }}
      />
    </Box>
  );
};

function GreenStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <GreenStepIconRoot ownerState={{ active, completed }} className={className}>
      {completed ? (
        <Check fontSize="small" />
      ) : (
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "currentColor",
          }}
        />
      )}
    </GreenStepIconRoot>
  );
}

GreenStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  className: PropTypes.string,
};

const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
  "&:hover": {
    "& .MuiTimelineContent-root": {
      transition: "transform 0.3s ease-in-out",
    },
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

export default function Page() {
  const milestones = [
    {
      id: 1,
      title: "با جدیدترین محصول ما در اینستاگرام آشنا شوید.",
      description: "و با یک کامنت از آخرین پست اینستاگرامی ما حمایت کنید.",
      icon: <Check />,
      color: "#33c678",
    },
    {
      id: 2,
      title: "حداقل ۲ تا «ساندویچ سبز» سفارش دهید.",
      description:
        "جزو اولین افرادی باشید که «ساندویچ سبز» جدید ما را امتحان می‌کنند!",
      icon: <Circle />,
      color: "#33c678",
    },
    {
      id: 3,
      title: "نظرتون درباره این محصول چی بود؟",
      description:
        "نظر شما به بهبود کیفیت محصولات و خدمات ما کمک خیلی زیادی می‌کنه :)",
      icon: <Check />,
      color: "#fffff",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: "1rem 1.5rem",
        backgroundColor: "#fdfdfd",
        borderRadius: 3,
        direction: "rtl",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography
          variant="body1"
          component="h1"
          gutterBottom
          align="right"
          sx={{ fontWeight: "bold", mb: "1rem" }}
        >
          پیش نمایش محتوای ماموریت
        </Typography>

        <CardMedia
          component="img"
          image="/food-img.png"
          alt="green sandwich"
          sx={{
            borderRadius: "0.845rem",
            height: "100%", // Make it full height
            objectFit: "cover", // Ensure the image covers the area without distortion
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Add bottom shadow
          }}
        />

        <Card variant="outlined" sx={{ my: 2, borderRadius: "16px" }}>
          <CardContent style={{ paddingBottom: "1rem" }}>
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bolder", fontSize: "0.9rem" }}
            >
              اولین نفری باشید که «ساندویچ سبز» را امتحان می‌کند!
            </Typography>
            <Typography
              sx={{ fontSize: "0.75rem", color: "#b0b4bb", fontWeight: 400 }}
            >
              یک صبحانه مقوی و سالم با ترکیبی تازه از مواد مغذی، ساندویچ سبز
              جدید ما اماده شده است تا روزتان را پر انرژی شروع کنید
            </Typography>

            <Typography
              variant="caption"
              display="block"
              sx={{ mt: 2, color: "#b0b4bb" }}
            >
              مهلت:{" "}
              <span style={{ color: "#818692", marginRight: "0.2rem" }}>
              ۱۲ فرودین ۱۴۰۴
              </span>
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" sx={{ my: 2, borderRadius: "16px" }}>
          <CardContent style={{ paddingBottom: "1rem" }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bolder", fontSize: "0.9rem" }}
            >
              مراحل ماموریت
            </Typography>

            <MuiTimeline position={"right"} sx={{ p: 0 }}>
              {milestones.map((milestone, index) => (
                <StyledTimelineItem
                  key={milestone.id}
                  sx={{
                    "&::before": {
                      content: "none",
                    },
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        bgcolor: milestone.color,
                        p: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: 0,
                        width: "16px",
                        height: "17px",
                      }}
                    >
                       {React.cloneElement(milestone.icon, {
                        sx: { fontSize: "1rem" },
                      })}
                    </TimelineDot>

                    {/* Conditional rendering of TimelineConnector */}
                    {index === 0 && (
                      <TimelineConnector
                        sx={{
                          bgcolor: "#33c678",
                          borderWidth: "9px",
                        }}
                      />
                    )}
                    {index === 1 && (
                      <TimelineConnector
                        sx={{
                          border: "none",
                          borderLeft: "2px dashed lightGray",
                          height: "100%",
                          margin: 0,
                          width: "0",
                          bgcolor: "transparent",
                        }}
                      />
                    )}
                    {index === 2 && (
                      <TimelineConnector
                        sx={{
                          display: "none",
                        }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ p: 0 }}>
                    <StyledPaper
                      sx={{
                        boxShadow: "none",
                        textAlign: "right",
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                    >
                      <Typography
                        component="h4"
                        sx={{
                          fontSize: "0.84rem",
                          fontWeight: 600,
                          color: "#45464f",
                        }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="body1"
                        sx={{
                          fontSize: "0.78rem",
                          fontWeight: 400,
                          color: "#818692",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {milestone.description}
                      </Typography>

                      {milestone.id === 1 && (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              my: 2,

                              width: "100%",
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: "#b0b4bb",
                                fontWeight: 100,
                                fontSize: "0.7rem",
                              }}
                            >
                              پاداش:
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "end" }}>
                              <Typography
                                variant="body1"
                                sx={{ fontWeight: 600, ml: 1,fontSize:"0.8rem" }}
                              >
                                1000 <span style={{ color: "#6b47e1" }}>XP</span>
                              </Typography>

                              <Typography
                                variant="body1"
                                sx={{ fontWeight: 600, textAlign: "right",fontSize:"0.8rem" }}
                              >
                                10
                              </Typography>
                              <Paid sx={{ color: "#9dd5b4" }} />
                            </Box>
                          </Box>
                          <Divider sx={{ mb: 2, borderBottomWidth: 2 }} />
                        </>
                      )}

                      {milestone.id === 2 && (
                        <>
                          <Box sx={{ width: "100%" }}>
                            <ProgressWithLabels
                              leftLabel="میزان پیشرفت : 50%"
                              rightLabel="1 از 2"
                              value={60}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              margin:"0.8rem 0rem 1rem 0rem",
                              width: "100%",
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: "#b0b4bb",
                                fontWeight: 100,
                                fontSize: "0.7rem",
                              }}
                            >
                              پاداش:
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "end" }}>
                              <Typography
                                variant="body1"
                                sx={{ fontWeight: 600, ml: 1, fontSize:"0.8rem" }}
                              >
                                3000 <span style={{ color: "#6b47e1" }}>XP</span>
                              </Typography>

                              <Typography
                                variant="body1"
                                sx={{ fontWeight: 600, textAlign: "right", fontSize:"0.8rem" }}
                              >
                                10
                              </Typography>
                              <Paid sx={{ color: "#f6ce62" }} />
                            </Box>
                          </Box>
                          <Divider sx={{ mb: 2 }} />
                        </>
                      )}

                      {milestone.id === 3 && (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              margin:"0.7rem 0rem 0.6rem 0rem",
                              width: "100%",
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: "#b0b4bb",
                                fontWeight: 100,
                                fontSize: "0.7rem",
                              }}
                            >
                              پاداش:
                            </Typography>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                variant="body1"
                                sx={{ fontWeight: 600, ml: 1 , fontSize:"0.8rem"}}
                              >
                                500 <span style={{ color: "#6b47e1" }}>XP</span>
                              </Typography>
                            </Box>
                          </Box>
                          <Button
                            variant="outlined"
                            disabled
                            endIcon={
                              <ArrowOutward
                                sx={{
                                  width: "14px",
                                  height: "14px",
                                  transform: "rotate(270deg)",
                                  color: "Gray",
                                  mr: "6px",
                                }}
                              />
                            }
                            sx={{
                              color: "#a2a2a7",
                              fontSize:"0.84rem",
                              borderColor: "gray",
                              borderRadius: "0.7rem",
                              "&:hover": {
                                borderColor: "darkgray",
                              },
                              "& .MuiButton-endIcon": {
                                marginLeft: 0,
                                marginRight: "6px",
                              },
                            }}
                          >
                            شرکت در نظر سنجی
                          </Button>
                        </>
                      )}
                    </StyledPaper>
                  </TimelineContent>
                </StyledTimelineItem>
              ))}
            </MuiTimeline>
          </CardContent>
        </Card>
      </ThemeProvider>
    </Box>
  );
}
