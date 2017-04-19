#!/usr/bin/env bash
dotnet restore && dotnet build

dotnet test sdkstarter.Test/sdkstarter.Test.csproj
