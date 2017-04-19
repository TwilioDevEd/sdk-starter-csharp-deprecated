using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace sdkstarter.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Views/Home/Index.cshtml");
        }

        public ActionResult Video()
        {
            return View("~/Views/Home/Video.cshtml");
        }

        public ActionResult Chat()
        {
            return View("~/Views/Home/Chat.cshtml");
        }

        public ActionResult Notify()
        {
            return View("~/Views/Home/Notify.cshtml");
        }

        public ActionResult Sync()
        {
            return View("~/Views/Home/Sync.cshtml");
        }

        public ActionResult Error()
        {
            return View("~/Views/Shared/Error.cshtml");
        }
    }
}
